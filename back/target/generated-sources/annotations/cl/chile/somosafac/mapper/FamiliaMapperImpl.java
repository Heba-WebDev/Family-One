package cl.chile.somosafac.mapper;

import cl.chile.somosafac.DTO.FamiliaDTO;
import cl.chile.somosafac.entity.FamiliaEntity;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-19T11:40:27-0300",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
@Component
public class FamiliaMapperImpl implements FamiliaMapper {

    @Override
    public FamiliaDTO familiatoDto(FamiliaEntity familia) {
        if ( familia == null ) {
            return null;
        }

        FamiliaDTO familiaDTO = new FamiliaDTO();

        return familiaDTO;
    }

    @Override
    public FamiliaEntity familiatoEntity(FamiliaDTO familiaDTO) {
        if ( familiaDTO == null ) {
            return null;
        }

        FamiliaEntity familiaEntity = new FamiliaEntity();

        return familiaEntity;
    }

    @Override
    public void updateFamiliaFromDto(FamiliaDTO familiaDTO, FamiliaEntity familia) {
        if ( familiaDTO == null ) {
            return;
        }
    }
}
