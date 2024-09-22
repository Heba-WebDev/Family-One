package cl.chile.somosafac.mapper;

import cl.chile.somosafac.DTO.UsuarioDTO;
import cl.chile.somosafac.entity.UsuarioEntity;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-22T13:15:03-0300",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
@Component
public class UsuarioMapperImpl implements UsuarioMapper {

    @Override
    public UsuarioDTO usuarioToUsuarioDTO(UsuarioEntity usuario) {
        if ( usuario == null ) {
            return null;
        }

        UsuarioDTO usuarioDTO = new UsuarioDTO();

        usuarioDTO.setId( usuario.getId() );
        usuarioDTO.setCorreo( usuario.getCorreo() );
        usuarioDTO.setContrasenaHash( usuario.getContrasenaHash() );
        usuarioDTO.setTipoUsuario( usuario.getTipoUsuario() );
        usuarioDTO.setActivo( usuario.getActivo() );
        usuarioDTO.setVerificado( usuario.getVerificado() );
        usuarioDTO.setFechaRegistro( usuario.getFechaRegistro() );
        usuarioDTO.setFechaUltimoAcceso( usuario.getFechaUltimoAcceso() );
        usuarioDTO.setAceptarTerminos( usuario.getAceptarTerminos() );

        return usuarioDTO;
    }

    @Override
    public UsuarioEntity usuarioDTOToUsuario(UsuarioDTO usuarioDTO) {
        if ( usuarioDTO == null ) {
            return null;
        }

        UsuarioEntity usuarioEntity = new UsuarioEntity();

        usuarioEntity.setId( usuarioDTO.getId() );
        usuarioEntity.setCorreo( usuarioDTO.getCorreo() );
        usuarioEntity.setContrasenaHash( usuarioDTO.getContrasenaHash() );
        usuarioEntity.setTipoUsuario( usuarioDTO.getTipoUsuario() );
        usuarioEntity.setFechaRegistro( usuarioDTO.getFechaRegistro() );
        usuarioEntity.setActivo( usuarioDTO.getActivo() );
        usuarioEntity.setVerificado( usuarioDTO.getVerificado() );
        usuarioEntity.setFechaUltimoAcceso( usuarioDTO.getFechaUltimoAcceso() );
        usuarioEntity.setAceptarTerminos( usuarioDTO.getAceptarTerminos() );

        return usuarioEntity;
    }
}
